namespace AreaCalculator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool keepPlaying = true;

            while (keepPlaying)
            {
                Console.WriteLine("==================");
                Console.WriteLine("Area Calculator 📐");
                Console.WriteLine("==================");
                Console.WriteLine("1) Triangle\n 2. Rectangle\n 3) Square\n 4) Circle\n 5) Quit ");
                Console.Write("Which shape: ");
                int number = Convert.ToInt32(Console.ReadLine());
                double area = 0;

                if (number == 3)
                {
                    Console.WriteLine("Enter your side: ");
                    int side = Convert.ToInt32(Console.ReadLine());

                    area = side * side;
                    Console.WriteLine(area);
                }
                else if (number == 2)
                {
                    Console.WriteLine("Enter your length: ");
                    int length = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter your width");
                    int width = Convert.ToInt32(Console.ReadLine());

                    area = length * width;
                    Console.WriteLine($"The area is {area}");
                }
                else if (number == 1)
                {
                    Console.WriteLine("Enter your height: ");
                    int height = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter your base: ");
                    int bases = Convert.ToInt32(Console.ReadLine());

                    area = (height * bases) / 2;
                    Console.WriteLine($"The area is {area}");
                }
                else if (number == 4)
                {
                    Console.WriteLine("Enter your radius");
                    int radius = Convert.ToInt32(Console.ReadLine());

                    area = 3.14 * radius;
                    Console.WriteLine($"The area is {area}");

                } else
                {
                    Console.WriteLine("Error number! Could you please try one more time? ");
                }

                Console.WriteLine("Calculate again? (y/n)");
                string response = Console.ReadLine();

                if (response != "y" &&  response != "yes")
                {
                    keepPlaying = false;
                    Console.WriteLine("Thank you to use my calculation");
                }
                Console.WriteLine();
            }

        }
    }
}
