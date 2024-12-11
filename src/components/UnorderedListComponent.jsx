import ElementLiComponent from "./ElementLiComponent";

export default function UnorderedListComponent ({btnCompleteAction, workUl}) {
    return (
        <>
            <ul>
                {workUl.map ((work, index) => 
                    <ElementLiComponent key={index}  indexValue = {index}  textWork={work} btnPush={btnCompleteAction}/>
                ) }
            </ul>
        </>
    );
}