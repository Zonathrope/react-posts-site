import React, {useRef} from 'react';

const RadioButtons = ({setSortType}) => {
    const sortType = [useRef(null), useRef(null), useRef(null)]

    const handleRadioButtons = () =>{
        chosenSortType(sortType)
    }

    const chosenSortType = (optionArray) => {
        if(optionArray[0].current.checked) {
            setSortType('DATE')
        }
        else if(optionArray[1].current.checked) {
            setSortType('NAME')
        }
        else if(optionArray[2].current.checked) {
            setSortType('TEXT')
        }
    }

    return (
        <form>
            Sort by:
            <label>
                <input ref={sortType[0]} onClick={handleRadioButtons} name="group1" type="radio"/>
                <span>Date</span>
            </label>
            <label>
                <input ref={sortType[1]} onClick={handleRadioButtons} name="group1" type="radio"/>
                <span>Name</span>
            </label>
            <label>
                <input ref={sortType[2]} onClick={handleRadioButtons} name="group1" type="radio"/>
                <span>Text</span>
            </label>
        </form>
    );
};

export default RadioButtons;