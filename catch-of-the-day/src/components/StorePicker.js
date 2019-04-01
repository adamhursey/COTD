import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
   myInput = React.createRef();
   goToStore(event) {
      event.preventDefault();
      // Need to redirect page. Video 11

   }

   render() {
      return (
         <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Pleast Enter A Store</h2>
            <input 
               type="text" 
               required placeholder="Store Name" 
               ref={this.myInput}
               defaultValue={getFunName()}
            />
            <button type="submit">Visit Store</button>
         </form>
      )
   }
}

export default StorePicker