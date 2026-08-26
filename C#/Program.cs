using System;

class Program
{
  static void Main(string[] args)
  {
    Console.WriteLine("🎤 Welcome to Mad Lyricist!");

    Console.WriteLine("Enter a noun: ");
    string noun = Console.ReadLine();

    Console.WriteLine("Enter a verb: ");
    string verb = Console.ReadLine();

    Console.WriteLine("Enter an adjective: ");
    string adjective = Console.ReadLine();

    Console.WriteLine("Enter an object: ");
    string object = Console.ReadLine();

    Console.WriteLine("Enter a place: ");
    string place = Console.ReadLine();

    Console.WriteLine("\n🎶 Your Song 🎶\n");
    Console.WriteLine($"Twinkle, twinkle, little {noun},\n");
    Console.WriteLine($"How I {verb} what you are.\n");
    Console.WriteLine($"Up above the bug so {adjective},\n");
    Console.WriteLine($"Like a {object} in the {place}.");

    Console.WriteLine("\n✨ Your lyrics are complete and ready for the charts!\n");
    Console.WriteLine("Would you like to create another song? (y/n)");

    string response = Console.ReadLine();
    if (response.ToLower() == "y"){
      Main(args); // Restart the program for another song
    }
    else
    {
      Console.WriteLine("Thanks for using Mad Lyricist! 🎤✨");
    }
  }
}