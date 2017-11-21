console.log("it's a navbar")
const navBarElement = document.getElementById("navBar")

    navBarElement.innerHTML += `
        <h1>OMG It's Betsy!</h1>
        <ul>
            <li href="#">Catagories</li>
            <li href="#">Order</li>
            <li href="#">Log Out</li>
        </ul>
    `

module.exports = navBar