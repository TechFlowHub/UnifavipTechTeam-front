import './Ability.css'

const Ability = ({ isOwner }) => {
  return (
    <div className="ability">
      <div className='title'>
        <h1>Habilidades</h1>
        <span>Adicione uma nova habilidade</span>
      </div>

      <div className="ability-content">
        <input type="text" className='search-ability' />

        <div className='ability-info'>
          <span>Lorem Impsum</span>

          <div className='ability-level'>
            <div>
              <input type="radio" name="ability-level" id="ability-level" />
              <label htmlFor="">Básico</label>
            </div>

            <div>
              <input type="radio" name="ability-level" id="ability-level" />
              <label htmlFor="">Intermediário</label>
            </div>

            <div>
              <input type="radio" name="ability-level" id="ability-level" />
              <label htmlFor="">Avançado</label> 
            </div>    
          </div>
        </div>

        <div className='ability-info'>
          <span>Lorem Impsum</span>

          <div className='ability-level'>
            <div>
              <input type="radio" name="ability-level" id="ability-level" />
              <label htmlFor="">Básico</label>
            </div>

            <div>
              <input type="radio" name="ability-level" id="ability-level" />
              <label htmlFor="">Intermediário</label>
            </div>

            <div>
              <input type="radio" name="ability-level" id="ability-level" />
              <label htmlFor="">Avançado</label> 
            </div>    
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Ability