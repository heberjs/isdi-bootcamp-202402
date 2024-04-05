import RoundButton from "./RoundButton";

import './CancelButton.sass'

function CancelButton(props) {
    return <RoundButton classname='cancel-button' onClick={props.onClick}>{props.children || 'Cancel'}</RoundButton>
}

export default CancelButton