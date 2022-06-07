using CreditApp.Models;

namespace CreditApp.Interfaces;


public interface ICriminalCheck
{
    public Task<bool> IsCriminal(User user);
}