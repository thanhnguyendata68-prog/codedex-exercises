namespace MadLyricist
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool keepPlaying = true;

            // Loop to let the user create songs repeatedly
            while (keepPlaying)
            {
                Console.WriteLine("🎤 Welcome to Mad Lyricist!");

                // Collecting all required inputs
                Console.WriteLine("Enter a noun: ");
                string noun = Console.ReadLine();

                Console.WriteLine("Enter a verb: ");
                string verb = Console.ReadLine();

                Console.WriteLine("Enter an adjective: ");
                string adjective = Console.ReadLine();

                Console.WriteLine("Enter an emotion (e.g., happy, sad): ");
                string emotion = Console.ReadLine();

                Console.WriteLine("Enter a place: ");
                string place = Console.ReadLine();

                Console.WriteLine("Enter a time of day (e.g., morning, night): ");
                string timeOfDay = Console.ReadLine();

                // Dynamic lyrics using conditionals, comparison, and logical operators
                string specialBridge;

                // Logical OR (||), equality (==), and inequality (!=)
                if (timeOfDay.ToLower() == "night" || timeOfDay.ToLower() == "midnight")
                {
                    specialBridge = "The stars shine bright while the world is asleep.";
                }
                // Logical AND (&&), comparison operator (<), and negation (!)
                else if (emotion.ToLower() == "happy" && !(noun.Length < 3))
                {
                    specialBridge = "Joy fills the air and lights up the whole town!";
                }
                // Numerical comparison (>=) based on adjective length
                else if (adjective.Length >= 6)
                {
                    specialBridge = "A grand adventure is unfolding right now.";
                }
                else
                {
                    specialBridge = "Every heartbeat echoes through the quiet sky.";
                }

                // Output song template
                Console.WriteLine("\n🎶 Your Song 🎶\n");
                Console.WriteLine($"Twinkle, twinkle, little {noun},");
                Console.WriteLine($"How I {verb} what you are.");
                Console.WriteLine($"Up above the world so {adjective},");
                Console.WriteLine($"Feeling so {emotion} in the {place} at {timeOfDay}.");
                Console.WriteLine($"✨ {specialBridge} ✨\n");

                Console.WriteLine("\n✨ Your lyrics are complete and ready for the charts!\n");

                // Replay prompt using comparison and logical operators
                Console.WriteLine("Would you like to create another song? (y/n)");

                string response = Console.ReadLine().ToLower();

                if (response != "y" && response != "yes")
                {
                    keepPlaying = false;
                    Console.WriteLine("\nThanks for using Mad Lyricist! 🎤✨");
                }

                Console.WriteLine(); // Blank line between songs
            }

        }
    }
}
