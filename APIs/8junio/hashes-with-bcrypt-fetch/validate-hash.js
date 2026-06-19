import bcrypt from "bcrypt";

async function login() {

    const password = "123456";

    const hashGuardado =
        "$2b$10$dftE3LUznnm8mgfe7hyDYOJK.MbOGvJp/MVx6HIvhHpUSjBhm20uS";

    const ok =
        await bcrypt.compare(
            password,
            hashGuardado
        );

    console.log(ok);
};

login();