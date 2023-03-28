using Microsoft.AspNetCore.Mvc;
using ms_practice.Models;
using Newtonsoft.Json;
using System.Net;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ms_practice.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class CodesController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public CodesController()
        {
            _httpClient = new HttpClient();
        }

        // GET: api/<CodesController>
        [HttpGet]
        public async Task<string> Get()
        {
            _httpClient.BaseAddress = new Uri("https://api.jdoodle.com/");
            var data = new { 
                clientId = "90ea5f4576609a4f4ec9dee087e9ec80",
                clientSecret = "6cdc7290f0e1b67d29e467274b5c7a8cc030651d03188b13c196cd531d7397d8",
                script = "print(\"Hola, mundo!\")\r\n",
                stdin = "",
                language = "python2",
                versionIndex = "0",
                compileOnly = false,
            };

            var content = new StringContent(JsonConvert.SerializeObject(data), Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync("v1/execute", content);

            string contenido = await response.Content.ReadAsStringAsync();

            return contenido;
        }

        // GET api/<CodesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CodesController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] CodeRequest request)
        {
            _httpClient.BaseAddress = new Uri("https://api.jdoodle.com/");
            var data = new
            {
                clientId = "90ea5f4576609a4f4ec9dee087e9ec80",
                clientSecret = "6cdc7290f0e1b67d29e467274b5c7a8cc030651d03188b13c196cd531d7397d8",
                script = request.Script,
                stdin = request.Stdin,
                language = "python2",
                versionIndex = "0",
                compileOnly = false,
            };

            var content = new StringContent(JsonConvert.SerializeObject(data), Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync("v1/execute", content);

            string contenido = await response.Content.ReadAsStringAsync();

            return new OkObjectResult(contenido);
        }

        // PUT api/<CodesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CodesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
