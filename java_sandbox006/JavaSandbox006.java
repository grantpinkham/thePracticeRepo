public class JavaSandbox006 {
    public static void main(String[] args) {
        openRussianDoll(10);
    }
    static void openRussianDoll(int doll) {
        if (doll == 1) {
            System.out.println("all dolls opened");
        } else {
            openRussianDoll(doll - 1);
        }
    }
}