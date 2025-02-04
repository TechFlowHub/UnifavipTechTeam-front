import './Enterprise.css'

const Enterprise = () => {
  return (
    <div className='enterprises'>
      <h1>Empresas Parceiras</h1>

      <div className='content-enterprises'>
        {[...Array(12)].map((_, index) => (
          <div key={index} className="enterprises-logo"></div>
        ))}
      </div>
    </div>
  )
}

export default Enterprise;