const ReviewItem = ({ text, img, name, nickname }) => {
  return (
    <div className="grid content-between gap-5 bg-base-100 rounded-md p-5 h-80 mx-3">
      <div className="text-sm">{text}</div>
      <div className="flex gap-3 justify-self-start h-fit">
        <img src={img} alt="profile=picture" className="rounded-full w-8" />
        <div className="flex flex-col justify-between">
          <div className="text-sm text-primary font-bold">{name}</div>
          <div className="text-xs">{nickname}</div>
        </div>
      </div>
    </div>
  )
}

export default ReviewItem