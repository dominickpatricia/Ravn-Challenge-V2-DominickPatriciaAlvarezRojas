import React, {useState} from "react";

const ListContainer = ({children}) => {

  const [selected, setSelected] = useState(null)

  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      setSelected: setSelected,
      selected: selected,
      ...child.props,
    })
  })
}

export default ListContainer
