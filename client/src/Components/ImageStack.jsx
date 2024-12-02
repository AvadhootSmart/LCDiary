export default function ImageStack() {
  return (
    <>
      <div className="object-cover flex h-[69%] w-[40%]">
        <img src="/Snap.png" />
        <img className="-translate-x-[110%] translate-y-10" src="/Snap.png" />
      </div>
    </>
  );
}
