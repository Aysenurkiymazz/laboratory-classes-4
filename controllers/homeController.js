const getHomeView = (req, res) => {
    res.render("home.ejs", {
      headTitle: "Shop - Home",
      path: "/",
    });
  };
  
  module.exports = { getHomeView };
