import React from 'react'
import Singleproductnav from './Signleproductnav/Singleproductnav'
import Singleproductcontainer from './Singleproductcontainer/Singleproductcontainer'
import Singleproductdescription from './Singleproductdescription/Singleproductdescription'
import Singlerelatedproduct from './Singlerelatedproduct/Singlerelatedproduct'

const Singleproduct = () => {
  return (
    <>
        <Singleproductnav/>
        <Singleproductcontainer/>
        <Singleproductdescription/>
        <Singlerelatedproduct/>
    </>
  )
}

export default Singleproduct