import styles from "./styles.module.scss"
import { splitAndCapitalize } from "../../utils/utils"

const Hero = ({
  isComplexSearchVisible, 
  setComplexSearchVisibility, 
  handleChange, 
  formState, 
  setFormState, 
  handleSearch  
}) => {
    return (
        <div className={styles.hero}>
          <div className={styles.overlay}></div>
            <video muted autoPlay loop>
                <source src="/vid.mp4" type="video/mp4"></source>
            </video>
            <div className={styles.searchContainer} style={{top: isComplexSearchVisible ? "250px" : "100px"}}>
              <input type="text" name="query" id="query" placeholder="Search..." onChange={handleChange} />
              <div className={styles.buttonContainer}>
                <button className="search-btn" onClick={handleSearch}>Search</button>
                <button 
                  className="advanced-search-btn"
                  onClick={() => setComplexSearchVisibility(isComplexSearchVisible => !isComplexSearchVisible)}
                  >
                    Advanced Search
                  </button>
              </div>
            </div>
            <div className={styles.advancedSearch} style={{width: "100%", height: isComplexSearchVisible ? "100px" : "0px"}}>
              {isComplexSearchVisible && (
                <div className={styles.complexSearch}>
                  {Object.keys(formState).map(key => (
                      <div className="input-container" key={key} style={{margin: "10px"}}>
                          <label htmlFor={key} style={{fontWeight: "bold", marginBottom: "10px"}}>{splitAndCapitalize(key)}</label>
                          {!formState[key].match(/(true|false)/g)
                          ? (<input 
                              name={key}
                              id={key}
                              onChange={handleChange}
                              style={{
                                width: "300px", 
                                height: "30px", 
                                borderRadius: "5px", 
                                border: "none", 
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                              }} />)
                          : (
                            <select 
                              id={key} 
                              onChange={handleChange}
                              style={{
                                width: "300px", 
                                height: "30px", 
                                borderRadius: "5px", 
                                border: "none", 
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                              }} >
                              <option value="true">True</option>
                              <option value="false">False</option>
                            </select>
                          )}
                      </div>
                  ))}
                </div>
                )}
            </div>
            {/* <h1>Find your recipe!</h1> */}
          </div>
    )
}

export default Hero