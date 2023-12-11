import { StyledMusicElem } from "./MusicElem.style";

interface IMusicElemProps {
  maintext: string;
  secondarytext: string;
}

export const MusicElem = ({
  maintext,
  secondarytext,
}: IMusicElemProps) => {
  return (
    <StyledMusicElem>
      <img src="./img/music/album-1.png" alt="Album" />
      <div className="music__description">
        <p className="main__text">{maintext}</p>
        <p className="secondary__text">{secondarytext}</p>
      </div>
      <div className="plus-button"></div>
    </StyledMusicElem>
  );
};
