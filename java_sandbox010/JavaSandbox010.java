import java.util.Scanner;
public class JavaSandbox010 {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        System.out.println("enter a number");
        int num = keyboard.nextInt();
        System.out.println(returnACalculation(num));
    }
    public static int returnACalculation(int num) {
        return num * num;
    }
}
