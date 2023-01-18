import { prisma } from "../app/data/prisma.server";
import audibleBooks from "../audiblebooks.json";
import dropboxBooks from "../audiobooks.json";
import type { AudibleJSON, DropboxJSON, Book } from "../app/types/bookTypes";

console.log("audiblebooks", audibleBooks[0]);
async function main() {
  const audible: AudibleJSON[] = audibleBooks.slice(0, 10);
  const dropbox: DropboxJSON[] = dropboxBooks.slice(0, 10);

  for (let book of audible) {
    const time = book.bookLength ? book.bookLength.trim().split(":") : [];
    let bookLengthMinutes = undefined;
    if (time.length > 1) {
      bookLengthMinutes =
        parseInt(time[0]) * 60 + parseInt(time[1]) + parseInt(time[2]) / 60;
    }
    const bookToInsert: Book = {
      asin: book.asin,
      source: "audible",
      title: book.title,
      author: book.author,
      description: book.description || "",
      publishedYear: book.publishedYear || 0,
      releaseDate: book.releaseDate ? new Date(book.releaseDate) : undefined,
      narratedBy: book.narratedBy,
      pageCount: book.pageCount,
      bookLengthText: book.bookLength,
      bookLengthMinutes,
      imageURL: book.imageURL,
      primaryCategory: book.pathPrimaryCat || "Unknown",
      secondaryCategory: book.pathSecondaryCat || "Unknown",
      genres: book.categories.flatMap((cat) =>
        cat.trim().toLowerCase() !== "self-help"
          ? cat.split("-").map((el) => el.trim())
          : cat.trim()
      ),
    };
    const bookIn = await prisma.books.create({
      data: bookToInsert,
    });
  }
  // const testBook = await prisma.books.create({
  //   data: {
  //     source: "audible",
  //     dropboxLocation: undefined,
  //     title: "Fall; or Dodge in Hell",
  //     author: "Neal Stephenson",
  //     description:
  //       "From best-selling author Neal Stephenson and critically acclaimed historical and contemporary commercial novelist Nicole Galland comes a captivating and complex near-future thriller combining history, science, magic, mystery, intrigue, and adventure that questions the very foundations of the modern world.  When Melisande Stokes, an expert in linguistics and languages, accidently meets military intelligence operator Tristan Lyons in a hallway at Harvard University, it is the beginning of a chain of events that will alter their lives and human history itself. The young man from a shadowy government entity approaches Mel, a low-level faculty member, with an incredible offer. The only condition: She must sign a nondisclosure agreement in return for the rather large sum of money.  Tristan needs Mel to translate some very old documents, which, if authentic, are earth-shattering. They prove that magic actually existed and was practiced for centuries. But the arrival of the scientific revolution and the Age of Enlightenment weakened its power and endangered its practitioners. Magic stopped working altogether in 1851, at the time of the Great Exhibition at London's Crystal Palace - the world's fair celebrating the rise of industrial technology and commerce. Something about the modern world \"jams\" the \"frequencies\" used by magic, and it's up to Tristan to find out why.  And so the Department of Diachronic Operations - D.O.D.O. - gets cracking on its real mission: to develop a device that can bring magic back and send Diachronic Operatives back in time to keep it alive...and meddle with a little history at the same time. But while Tristan and his expanding operation master the science and build the technology, they overlook the mercurial - and treacherous - nature of the human heart.  Written with the genius, complexity, and innovation that characterize all of Neal Stephenson's work and steeped with the down-to-earth warmth and humor of Nicole Galland's storytelling style, this exciting and vividly realized work of science fiction will make you believe in the impossible and take you to places - and times - beyond imagining.  Full cast of narrators includes Robert Fass, James Foster, Tavia Gilbert, Arthur Morey, David Stifel, Charlie Thurston, and Kate Udall. ",
  //     narratedBy: "Malcolm Hillgartner",
  //     publishedYear: 2019,
  //     releaseDate: undefined,
  //     pageCount: 883,
  //     bookLength: "31:48:00",
  //     imageURL: "https://m.media-amazon.com/images/I/51yQ29LDeZL._SL500_.jpg",
  //     primaryCategory: "Fiction",
  //     secondaryCategory: "Action Suspense",
  //     asin: "B06Y5SDTGJ",
  //     genres: [
  //       "Cryonics",
  //       "Literature & Fiction - Action & Adventure - Mystery, Thriller & Suspense - Thriller & Suspense",
  //     ],
  //   },
  // });
}

// Run the seed function
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
