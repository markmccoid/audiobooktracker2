type Props = {
  imageUrl: string | undefined;
  width: number;
  height: number;
  bookTitle: string | undefined;
};
function BookImage({ imageUrl, width, height, bookTitle }: Props) {
  const noImage = !imageUrl || !imageUrl?.includes("http");

  return (
    <>
      {noImage ? (
        <div
          className={`w-[${128}px] h-[${200}px] border border-gray-700 rounded-lg`}
        >
          <img
            className="border border-gray-700 rounded-lg"
            src={`https://via.placeholder.com/128x200?text=${bookTitle}`}
            width={`${width}px`}
            height={`${height}px`}
          />
        </div>
      ) : (
        <img
          className="border border-gray-700 rounded-lg"
          src={imageUrl}
          width={`${width}px`}
          height={`${height}px`}
        />
      )}
    </>
  );
}

export default BookImage;
