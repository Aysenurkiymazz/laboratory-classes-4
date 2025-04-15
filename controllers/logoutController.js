const getLogoutView = (req, res) => {
    res.render("logout.ejs", {
      headTitle: "Shop - Logout",
      path: "/logout",
    });
  };
  
  const killApplication = () => {
    console.log("Application is shutting down...");
    process.exit();
  };
  
  module.exports = { getLogoutView, killApplication };