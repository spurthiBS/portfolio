import Experience from './experience';


const ExpCard = ({children , className }) => {
    return(
        <>
        <article className={'card ${className}'}>
              {children}
        </article>
        </>
    )
}

export default ExpCard;