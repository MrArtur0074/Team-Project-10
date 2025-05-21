import { FormWrapper } from "../FormWrapper.jsx";

export function ConfirmForm({ email, password, updateFields }) {
  return (
    <FormWrapper title="Этап 3">
      <div className="chsInfo_block">
        <h2 className="chsBold">Подтвердите свою почту</h2>
        <h2 className="chsNorm">
          Мы отправили ссылку на вашу почту. Перейдите по ней, чтобы завершить
          регистрацию и войти в аккаунт.
        </h2>
      </div>
    </FormWrapper>
  );
}
