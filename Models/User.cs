using System.ComponentModel.DataAnnotations;

namespace CreditApp.Models;

public class User
{
    [MaxLength(30)]
    public string Fio { get; set; }
    [Range(21,72)]
    public int Age { get; set; }
    [Range(0,10000000)]
    public int Sum { get; set; }
    [MaxLength(30)]
    public string Passport { get; set; }
    [MaxLength(30)]
    public string Sud { get; set; }
    [MaxLength(30)] 
    public string Work { get; set; }
    [Range(0,100)]
    public int Purpose { get; set; }
    [MaxLength(30)]
    public string Credits { get; set; }
    [MaxLength(30)]
    public string Deposit { get; set; }
    public int AutoAge { get; set; }
    [MaxLength(30)]
    public string InfoPassport { get; set; }
}