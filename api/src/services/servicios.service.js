const { models } = require("../libs/sequelize");

class ServicioService {
  constructor() {}

  async find() {
    const res = await models.Servicio.findAll();
    return res;
  }

  async findParm(objParm) {
    const res = await models.Servicio.findOne(objParm);
    return res;
  }

  async findOne(id) {
    const res = await models.Servicio.findByPk(id);
    return res;
  }

  async create(data) {
    const res = await models.Servicio.create(data);
    return res;
  }

  async update(id, data) {
    const model = await this.findOne(id);
    const res = await model.update(data);
    return res;
  }

  async delete(id, idService) {
    const model = await this.findParm({
      where: {
        identificacion: id,
        servicio: idService,
      },
    });
    await model.destroy({
      where: {
        identificacion: id,
        servicio: idService,
      },
    });
    return { deleted: true };
  }
}

module.exports = ServicioService;
