using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Models
{
    public class GradeCalculatorModel
    {
        // Gets and sets the values for each of these objects inside the model, and makes sure that the input is between 0 and 100.
        [Required]
        [Range(0,100, ErrorMessage = "Number must be between 0 and 100")]
        public double assignments { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double groupProject { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double quizzes { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double exams { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double intex { get; set; }
    }
}
