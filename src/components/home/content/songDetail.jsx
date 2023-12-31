import "./content.css";
import { FcMusic } from "react-icons/fc";
import ApiContext from "../../context/ApiContext";
import { Fragment, useContext } from "react";
import { BsEmojiSmileFill } from 'react-icons/bs';

const SongDetail = () => {
  const context = useContext(ApiContext)

  // console.log(context.songs)
  const filtered = context.songs.filter((val) => {
    if (context.searchValue === "") {
      return val
    } else if (val.song_name.toLowerCase().includes(context.searchValue.toLowerCase())) {
      return val
    } else if (val.singer.toLowerCase().includes(context.searchValue.toLowerCase())) {
      return val
    }
  })

  console.log(filtered)
  if (filtered.length < 1) return <h3 style={{ width: '90%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '8px' }}>No music found! <BsEmojiSmileFill style={{ color: 'red' }} /></h3>
  return (
    <>
      {
        filtered.map((s, key) => {
          return (
            <Fragment key={key}>

              <div className="col">
                <div className="box_music">
                  <div className="overlayBox" onClick={() => context.setId(s.musicId) || s.LikeMusic === "false" ? context.setLikedMusic(false) : context.setLikedMusic(true)}>
                    <div className="overlay">
                      <i className="icon">
                        <FcMusic />
                      </i>
                    </div>
                    <img alt="img" className="songPic" src={s.cover} />
                  </div>
                  <div className="song_text text-start ">
                    <h6 className="song_name m-0">{s.song_name}</h6>
                    <p className="singer text-muted">{s.singer}</p>
                  </div>
                </div>
              </div >
            </Fragment>
          )
        })
      }
    </>
  )
}

export default SongDetail;
