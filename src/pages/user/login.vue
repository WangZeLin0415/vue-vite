<template>
    <Card class="card" >
        <Form
            layout="horizontal"
            :model="formState"
            @finish="handleFinish"
            @finishFailed="handleFinishFailed"
            v-bind="formItemLayout"
        >
            <FormItem>
            <a-input v-model:value="formState.username"  placeholder="Username" >
                <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
            </FormItem>
            <FormItem>
            <a-input v-model:value="formState.password" type="password" placeholder="Password" >
                <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
            </FormItem>
            <FormItem>
            <Button
                type="primary"
                html-type="submit"
                :disabled='formState.username === "" || formState.password === "" '
            >
                登录{{count}}
            </Button>
            </FormItem>
        </Form>
    </Card>
</template>
<script lang="ts">
import { Card,Select,Form,Input,Button,message } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, UnwrapRef,computed,onMounted } from 'vue';
import {useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { State } from './login.d'
const { Option } = Select;
const FormItem = Form.Item;


export default {
    name:'Login',
    components:{
        Card,
        Select,
        Option,
        Form,
        Button,
        AInput:Input,
        FormItem,
        UserOutlined,
        LockOutlined
    },
   
    setup(){
        const store = useStore();
        const router = useRouter();
        const formState: UnwrapRef<State> = reactive({
            username: '',
            password: '',
        });

        const formItemLayout = {
            labelCol: { span: 0 },
            wrapperCol: { span: 24 },
        };

        const handleFinish = (values: State) => {
            // console.log(values, formState);
            store.dispatch({
                type:'login/login',
                payload:formState
            }).then(res=>{
                console.log(res)
                if(res.code === 0) {
                    message.error(res.mes);
                    return;
                }
                message.success(res.mes);
                sessionStorage.login = 'true'
                router.push({path:'/customerLayout'})
            })
        };

        const handleFinishFailed = (errors: ValidateErrorEntity<State>) => {
            console.log(errors);
        };

        
        onMounted(()=>{
            setTimeout(()=> store.commit('increment'),2000)
           
        })
        return {
            formState,
            handleFinish,
            handleFinishFailed,
            formItemLayout,
            count:computed(()=>store.getters.add(3))
        };
    }
}
</script>
<style lang="less" scoped>
    .card {
        width:600px;
        height: 300px;
        margin:30px auto;
    }
</style>