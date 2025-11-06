import './Loading.css'


const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-spinner">
        <img src="/src/assets/logo.svg" alt="itinterprises" style={{borderRadius:"50%", width:"800px",height:"800px",objectFit:"contain" }} />
        <div className="spinner"></div>
      </div>
    </div>
  )
}

export default Loading