const Modal = ({ image, artist, title, mp3 }) => {
  return (
    <div className="rounded-lg bg-white text-black">
      {`This is ${title} by ${artist}!`}
    </div>
  ) 
}

export default Modal;