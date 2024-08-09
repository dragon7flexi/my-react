import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    name: yup
        .string()
        .label('名前')
        .required(`${label}は必須入力です。`)
        .max(20, `${label}は${max}文字以内で入力してください。`),
    hender: yup
        .string()
        .label('性別')
        .required(`${label}は必須入力です。`),
    email: yup
        .string()
        .label('メールアドレス')
        .required(`${label}は必須入力です。`)
        .email(`${label}の形式が不正です。`),
    memo: yup
        .string()
        .label('備考')
        .required(`${label}は必須入力です。`)
        .min(10, `${label}は${min}文字以上で入力してください。`)
        .test('ng',
            ({ label }) => `${label}にNGワードが含まれています`,
            value => {
                const ngs = ['グロ'];
                for (const ng of ngs) {
                    if (value.incldues(ng)) {
                        return false;
                    }
                }
                return true;
            }
        )
});

export default function FormYup() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValue: {
            name: '名無し',
            email: 'admin@example.com',
            gender: 'male',
            memo: ''
        },

        resolver: yupResolver(schema),
    });

    const onsubmit = data => console.log(data);
    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <label htmlFor="name">名前:</label><br />
                <input id='name' type="text"
                    {...register('name')} />
                    <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor="hender">性別:</label><br />
                <label>
                    <input type="radio" value="male"
                        {...register('gender')} />男性
                </label>
                <label>
                    <input type="radio" value="female"
                        {...register('gender')} />女性
                </label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor="email">メールアドレス:</label><br />
                <input id='email' type="text"
                    {...register('email')} />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">備考</label><br />
                <textarea id="memo"
                    {...register('memo')} />
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type='submit'>送信</button>
            </div>
        </form>
    );
}