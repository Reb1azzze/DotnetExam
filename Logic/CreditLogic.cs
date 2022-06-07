using CreditApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace CreditApp.Logic;

public class CreditLogic
{
    private static int CreditPoints = 0;

    public static string CreditIssue(User user)
    {
        CreditPoints = 0;
        int temp = 0;
        CreditPoints += user.Purpose;

        if (Int32.TryParse(user.Work, out temp)) CreditPoints += temp;
        else CreditPoints += user.Age < 70 ? 5 : 0;

        if (Int32.TryParse(user.Deposit, out temp)) CreditPoints += temp;
        else CreditPoints += user.AutoAge < 3 ? 8 : 3;

        if (Int32.TryParse(user.Credits, out temp)) CreditPoints += temp;
        else CreditPoints += user.Purpose == 12 ? 0 : 15;

        CreditPoints += SolveSumIssue(user);
        CreditPoints += SolveAgeIssue(user);

        return ShowAnswer(SolvePointIssue());
    }

    public static int SolveAgeIssue(User user)
    {
        if (user.Age <= 28 && user.Age >= 21)
        {
            if (user.Sum < 1000000) return 12;
            if (user.Sum < 3000000) return 9;
            return 0;
        }
        if (user.Age >= 29 && user.Age <= 59)
            return 14;
        if(user.Deposit != "dependency" && int.Parse(user.Deposit) == 0) 
            return 0;
        return 8;
    }

    public static int SolveSumIssue(User user)
    {
        return user.Sum switch
        {
            < 1000000 => 12,
            < 5000000 => 14,
            _ => 8
        };
    }

    public static double SolvePointIssue()
    {
        return CreditPoints switch
        {
            < 80 => 0,
            < 84 => 30,
            < 88 => 26,
            < 92 => 22,
            < 96 => 19,
            < 100 => 15,
            _ =>  12.5
        };
    }

    public static string ShowAnswer(double points)
    {
        return points switch
        {
            0 => "В кредите вам отказано, ваш балл: " + CreditPoints,
            _ => "Поздравляем! вам одобрен кредит! ваша ставка: " + points + " Ваш балл: " + CreditPoints
        };
    }
}