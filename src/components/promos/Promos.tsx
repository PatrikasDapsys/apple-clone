import image1 from "../../images/iphone-tradein.webp"
import "./Promos.css"

type Props = {}

function Promos({}: Props) {
  return (
    <section id="promos">
        <div className="promos__card">
            <div className="promosImg__wrapper">
                <img src={image1} alt="" />
            </div>
        </div>
        <div className="promos__card">
            <div className="promosImg__wrapper">
                <img src={image1} alt="" />
            </div>
        </div>
        <div className="promos__card">
            <div className="promosImg__wrapper">
                <img src={image1} alt="" />
            </div>
        </div>
        <div className="promos__card">
            <div className="promosImg__wrapper">
                <img src={image1} alt="" />
            </div>
        </div>
        <div className="promos__card">
            <div className="promosImg__wrapper">
                <img src={image1} alt="" />
            </div>
        </div>
        <div className="promos__card">
            <div className="promosImg__wrapper">
                <img src={image1} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Promos