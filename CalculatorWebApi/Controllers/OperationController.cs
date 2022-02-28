using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperationController : ControllerBase
    {
        [HttpGet]
        public IActionResult CalculateAddition(string numbers)
        {
            return Ok();
        }

        //[HttpGet]
        //public IActionResult CalculateAddition(string numbers)
        //{
        //    return Ok();
        //}
        //[HttpGet]
        //public IActionResult CalculateAddition(string numbers)
        //{
        //    return Ok();
        //}
        //[HttpGet]
        //public IActionResult CalculateAddition(string numbers)
        //{
        //    return Ok();
        //}
        //[HttpGet]
        //public IActionResult CalculateAddition(string numbers)
        //{
        //    return Ok();
        //}

    }
}
