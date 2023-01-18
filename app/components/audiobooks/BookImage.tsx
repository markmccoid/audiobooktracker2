type Props = {
  imageUrl: string | undefined;
  width: number;
  height: number;
};
function BookImage({ imageUrl, width, height }: Props) {
  const noImage = !imageUrl || !imageUrl?.includes("http");

  return (
    <>
      {noImage ? (
        <div
          className={`w-[${width}px] h-[${height}px] border border-gray-700 rounded-lg`}
        >
          🖼️
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
