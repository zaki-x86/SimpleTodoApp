// The main section should be a container for the other components
// It should have radius border and a background color
// dark theme
// background: #1e1e1e;
// border: 1px solid #333;

const Main = function ({ children }) {
    return (
        <div>
            {children}
        </div>
    );    
};

export default Main;