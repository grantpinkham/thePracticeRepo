import java.util.Scanner;
public class JavaSandbox000 {
    public static void main(String[] args) {
        System.out.println("Hello there!");
        System.out.println("Enter one number: ");
        Scanner keyboard = new Scanner(System.in);
        int num1, num2;
        num1 = keyboard.nextInt();
        System.out.println("Enter a second number: ");
        num2 = keyboard.nextInt();
        System.out.println("I will add them together.");
        int sum = (num1 + num2);
        System.out.println("The numbers added are: " + sum);
    }
}
