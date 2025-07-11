// muốn import file routes vào file index thì phải export nó ra trước
const systemConfig = require("../../config/system")
const dashboardRouter = require("./dashboard.route")
const productRouter = require("./product.routes")
const productCategoryRouter = require("./products-category.route")

const roleRouter = require("./role.route")

module.exports = (app) =>{
  const PATH_ADMIN = systemConfig.prefixAdmin;

  app.use(PATH_ADMIN + '/dashboard', dashboardRouter);
  
  app.use(PATH_ADMIN + '/products', productRouter);

  app.use(PATH_ADMIN + '/products-category', productCategoryRouter);

  app.use(PATH_ADMIN + '/roles', roleRouter);

}