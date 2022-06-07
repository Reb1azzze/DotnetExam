using CreditApp.Logic;
using CreditApp.Models;

namespace CreditApp.Interfaces;

public interface ICreditLogic
{
    public Task<string> CreditIssue(User user);
}