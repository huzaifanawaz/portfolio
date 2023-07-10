import { IoMdCodeDownload } from "react-icons/io";

function CVDownloadButton() {
  const cvFilePath = "/cv/Muhammad_Faeez_Shabbir_-_Software_Engineer.pdf";

  return (
    <div className=" flex justify-center items-center w-full p-2 text-white rounded-full mt-6 ">
      <button className="bookmarkBtn">
        <a href={cvFilePath} download>
          <span className="IconContainer">
            <IoMdCodeDownload className="w-8 h-8" />
          </span>
        </a>
        <p className="text whitespace-nowrap">Download CV</p>
      </button>
    </div>
  );
}

export default CVDownloadButton;