using CreditApp.Interfaces;
using CreditApp.Models;
using Microsoft.AspNetCore.Mvc;
namespace CreditApp.Controllers;

[ApiController]
[Route("[controller]")] 
public class UserController : ControllerBase
{

    private readonly ICreditLogic CreditLogic;
    
    public UserController(ICreditLogic creditLogic)
    {
        this.CreditLogic = creditLogic;
    }
    
    [HttpPost]
    public async Task<ActionResult<string>> Post(User user)
    {
        return await CreditLogic.CreditIssue(user);
    }
}