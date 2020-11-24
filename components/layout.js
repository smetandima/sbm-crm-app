
import { useSelector } from 'react-redux'
import Sidebar from './shared/sidebar'

const Layout = ({ children }) => {
  const theme = useSelector(state => state.theme)

  return (
    <>
      <div className="page">
        <Sidebar />
        { children }
        <>
          <div className="popup mfp-hide" id="popup-settings">
            <form className="popup__form">
              <div className="popup__title h6">Account Settings</div>
              <div className="popup__tags"><a className="popup__tag active" href="#">Profile</a><a className="popup__tag" href="#">Password</a><a className="popup__tag" href="#">Email</a><a className="popup__tag" href="#">Notification</a><a className="popup__tag" href="#">Settings</a></div><select className="popup__select mobile-show">
                <option>Profile</option>
                <option>Password</option>
                <option>Email</option>
                <option>Notification</option>
                <option>Settings</option>
              </select>
              <div className="popup__user">
                <div className="popup__title h6 mobile-show">Your Profile</div>
                <div className="popup__category caption-sm">Your Avatar</div>
                <div className="popup__line">
                  <div className="popup__ava"><img className="popup__pic" src="img/ava.png"/></div>
                  <div className="popup__details">
                    <div className="popup__btns">
                      <div className="popup__loading"><input className="popup__file" type="file" /><button className="popup__btn btn btn_purple">Upload New</button></div><button className="popup__btn btn btn_gray">Delete Avatar</button>
                    </div>
                    <div className="popup__text">Avatar help your teammates recognize you in Unity.</div>
                  </div>
                </div>
              </div>
              <div className="popup__fieldset">
                <div className="popup__row">
                  <div className="popup__field field">
                    <div className="field__label">Your Full Name</div>
                    <div className="field__wrap"><input className="field__input" type="text" /></div>
                  </div>
                  <div className="popup__field field">
                    <div className="field__label">Display Name</div>
                    <div className="field__wrap"><input className="field__input" type="text" /></div>
                  </div>
                </div>
                <div className="popup__row">
                  <div className="popup__field field">
                    <div className="field__label">Role</div>
                    <div className="field__wrap"><input className="field__input" type="text" /></div>
                  </div>
                  <div className="popup__field field">
                    <div className="field__label">Location</div>
                    <div className="field__wrap"><input className="field__input" type="text" /></div>
                  </div>
                </div>
                <div className="popup__row">
                  <div className="popup__field field">
                    <div className="field__label">Role</div>
                    <div className="field__wrap"><input className="field__input" type="text" /></div>
                  </div>
                  <div className="popup__field field">
                    <div className="field__label">Team</div>
                    <div className="field__wrap"><input className="field__input" type="text" /></div>
                  </div>
                </div>
                <div className="popup__field field">
                  <div className="field__label">Bio</div>
                  <div className="field__wrap"><textarea className="field__textarea" defaultValue={""} /></div>
                </div>
              </div><button className="popup__btn btn btn_black" type="submit">Update Profile</button>
            </form>
          </div>{/* scripts*/}
        </>
      </div>
    </>
  )
}

export default Layout