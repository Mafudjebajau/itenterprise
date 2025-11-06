import './Loading.css'
import Logo from '../../assets/logo.svg'


const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-spinner">
        <img src={Logo} alt="itinterprises" style={{borderRadius:"50%", width:"800px",height:"800px",objectFit:"contain" }} />
        <div className="spinner"></div>
      </div>
    </div>
  )
}

export default Loading