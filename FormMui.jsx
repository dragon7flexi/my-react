import { Button, FormControl, formControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import { useForm } from "react-hook-form";

export default function FormBasic() {
    const defaultValues = {
        name: '名無し',
        email: 'admin@example.com',
        gender: 'male',
        memo: ''
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues
    });

    const onsubmit = data => console.log(data);
    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <TextField label="名前" margin="normal"
                    {...register('name', {
                        required: '名前は必須入力です。',
                        maxLength: {
                            value: 20,
                            message: '名前は20文字以内にしてください。'
                        }
                    })}
                    error={'name' in errors}
                    helperText={errors.name?.message}
                />
            </div>
            <div>
                <FormContorol>
                    <FormLabel component={legend}>性別</FormLabel>
                    <RadioGroup name="gender">
                        <FormControlLabel value="male" control={<Radio />} label="男性" 
                            {...register('gender', {
                                required: '性別は必須です。',
                            })}
                        />
                        <FormControlLabel value="male" control={<Radio />} label="女性" 
                            {...register('gender', {
                                required: '性別は必須です。',
                            })}
                        />
                    </RadioGroup>
                </FormContorol>
            </div>

            <div>
                <label htmlFor="email">メールアドレス:</label><br />
                <input 
                    id="email"
                    type="email"
                    {...register('email', {
                        required: 'メールアドレスは必須入力です。',
                        pattern: {
                            value: /([a-z]\d+\-.)@([a-z\d-]+(?:\.[a-z]+)*)/i,
                            message: 'メールアドレスの形式が不正です。'
                        }
                    })}
                />
                <div>{error.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">備考:</label>
                <textarea 
                    id="memo"
                    {...register('memo', {
                        required: '備考は必須入力です。',
                        minLength: {
                            value: 10,
                            message: '備考は10文字以上にしてください。'
                        }
                    })}
                />
                <div>{errors.memo?.message}</div>
                </div>
                <div>
                    <button type="submit">送信</button>
                </div>
            </div>
        </form>
    );
}