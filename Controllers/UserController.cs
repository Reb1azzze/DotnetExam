using CreditApp.Logic;
using CreditApp.Models;
using Microsoft.AspNetCore.Mvc;
namespace CreditApp.Controllers;

[ApiController]
[Route("[controller]")] 
public class UserController : ControllerBase
{

    [HttpPost]
    public async Task<ActionResult<string>> Post(User user)
    {
        return CreditLogic.CreditIssue(user);
    }
}