package exercise1;

import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean playAgain;

        do {
            playAgain = false; // Reset flag at the start of each run

            System.out.println("\n[Start: Year 3433 - Strange Planet]");
            System.out.println("You have been transported to the year 3433. You wake up and notice that you're no longer on Earth. Gravity feels lighter, tugging gently at your boots. It's pitch black outside, and as you push yourself up, you realize you're standing in front of a sleek, metallic house.");
            System.out.println("You have 2 options: [a] Walk towards the house or [b] Call out into the dark");
            System.out.print(">> ");

            String choice = scanner.nextLine().trim();

            if (choice.equalsIgnoreCase("a")) {
                System.out.println("\nYou quietly approach the house and step onto the metallic porch. Just as you reach to touch the front door panel, the lights inside flash a brilliant neon blue. A mechanical hum vibrates through the floor.");
                System.out.println("Select an option: [a] Knock on the reinforced door or [b] Peek through the side viewport window");
                System.out.print(">> ");

                String aOption = scanner.nextLine().trim();

                if (aOption.equalsIgnoreCase("a") || aOption.equalsIgnoreCase("b")) {
                    System.out.println("\nThe door slides back with a hiss. A hovering terminal scans your retinas, chiming in a cheerful synthesized voice: \"Carbon-based traveler recognized. Quarantine bypass granted.\"");
                    System.out.println("The computer says you live on!");
                } else {
                    System.out.println("Invalid choice. The security system locks down.");
                }

            } else if (choice.equalsIgnoreCase("b")) {
                System.out.println("\nYou yell out into the fog: \"Is anyone there?!\" Your voice bounces back, followed by a low, vibrating growl from behind a cluster of alien flora. Two luminescent eyes pierce the darkness, locking onto you.");
                System.out.println("Select an option: [a] Panic and sprint blindly into the thick violet fog or [b] Stand perfectly still and back away toward a glowing purple shrubbery.");
                System.out.print(">> ");

                String bOption = scanner.nextLine().trim();

                if (bOption.equalsIgnoreCase("a")) {
                    System.out.println("\nYou sprint as fast as the low gravity allows, but you can't see two feet in front of you. Suddenly, the ground vanishes beneath your feet.");
                    System.out.println("You fell off the cliff and plummeted to your death. Sorry... Press [y] to restart.");
                } else if (bOption.equalsIgnoreCase("b")) {
                    System.out.println("\nThe beast sniffs the air and stalks past you, distracted by a distant howl. Shaking, you realize you're starving. You pull a handful of glowing indigo berries off the shrub and swallow them whole.");
                    System.out.println("You ate some berries and didn't die. Peeta is that you? Press [y] to play again.");
                } else {
                    System.out.println("Invalid choice. The creature overtakes you.");
                }

                // Check if the player wants to restart
                System.out.print(">> ");
                String restartChoice = scanner.nextLine().trim();
                if (restartChoice.equalsIgnoreCase("y")) {
                    playAgain = true;
                }

            } else {
                System.out.println("Invalid choice. Please restart the program and choose either 'a' or 'b'.");
            }

        } while (playAgain);

        System.out.println("\nThanks for playing!");
        scanner.close();
    }
}