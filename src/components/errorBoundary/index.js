import React from 'react';
class ErrorBoundary extends React.Component {
   constructor(props) {
   super(props);
   this.state = { hasError: false };
   }
   static getDerivedStateFromError(error) {
   return { hasError: true };
   }
   componentDidCatch(error, errorInfo) {
   console.log(error, errorInfo);
   }  
   render() {
      if (this.state.hasError) {
         return (
            <section className="main">
            <div class='hasNoErrorOccured'>
                <h1>Something went wrong.</h1>
                <h3>Check Console</h3>
            </div>
            </section>
         );
      }
      return this.props.children; 
   }
}
export default ErrorBoundary;