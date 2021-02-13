using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Seed.Controllers
{
    [RoutePrefix("api/puntocontrol")]
    public class PuntocontrolController : ApiController
    {
        // GET: api/puntocontrol
        [HttpGet]
        [Route("listar")]
        public IHttpActionResult Get()
        {
            try
            {
                List<string> listaVacia = new List<string>();
                return Ok(listaVacia);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
    }
}
