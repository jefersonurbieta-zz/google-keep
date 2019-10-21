import pt from 'vuetify/es5/locale/pt'
import en from 'vuetify/es5/locale/en'

export default {
    pt: {
        $vuetify: pt,
        general: {
            yes: 'Sim',
            no: 'Não',
            caution: 'Atenção',
            and: 'e'
        },
        exceptions: {
            ERRO_401: 'Sua sessão expirou. Você será redirecionado para o login...',
            ERRO_DEFAULT: 'Ocorreu um erro ao realizar a operação.',
            ERRO_SEM_CONEXAO_INTERNET: 'Verifique a conexão com a internet.',
            ERRO_PERDA_SESSAO: 'Desculpe, você perdeu a sessão e sua página será recarregada.',
            SUCESSO_DEFAULT: 'Operação realizada com sucesso.',
            CANOT_CHANGE_USER_FROM_SOCIAL_NETWORK: 'Ops, seu usuário foi criado a partir de uma rede social, não é possível alterar a senha por aqui.',
            CANOT_CREATE_THUMBNAL: 'Ops, infelizmente não conseguimos criar uma imagem minificada. Por favor, informe outra imagem.',
            DUPLICATE_REGISTER: 'Ops, este email já foi inserido antes, por favor, verifique a opção esqueci senha',
            EMAIL_NOT_EXISTS: 'Ops, verificamos que este email não existe em nosso cadastro.',
            FILE_CORRUPTED: 'Ops, não conseguimos recuperar este arquivo',
            FILE_NOT_FOUND: 'Ops, não conseguimos encontrar este arquivo no nosso cadastro',
            WRONG_PASSWORD: 'Ops, sua senha ou email são inválidos, por favor, tente novamente.',
            WAITING_PROCESSING: 'Ops, ainda não conseguimos emitir sua certidão, aguarde o fim do processamento.',
            USER_UPDATED: 'Seus dados pessoais foram atualizados com sucesso.',
            CUSTOMER_WITH_DUPLICATED_NAME: 'Já existe um cliente cadastrado com o mesmo nome.',
            CUSTOMER_WITH_DUPLICATED_DOCUMENT: 'Já existe um cliente cadastrado com o mesmo CNPJ.',
            FILE_BIGGER_THAN_ACCEPTED: 'O arquivo selecionado deve ter no máximo 20Mb.'
        },
        login: {
            forgetPassword: 'Esqueceu sua senha?',
            login: 'Entrar',
            email: 'Email',
            password: 'Senha',
            register: 'Cadastre-se',
            inviteToRegister: 'Ainda não criou sua conta?',
            inviteToAgreeTerms: 'Ao prosseguir você aceita nossos',
            termsAndPolicy: 'termos de uso'
        },
        register: {
            title: 'Cadastre-se para ver fotos e vídeos dos seus amigos.',
            subtitle: 'Preencha os dados abaixo',
            submit: 'Crie sua conta',
            fullname: 'Nome completo',
            email: 'Email',
            password: 'Senha',
            confirmation: 'Confirmação de senha',
            alreadyHaveAnAccount: 'Já tem uma conta?',
            inviteToLogin: 'logar',
        },
        forgetPassword: {
            title: 'Esqueceu sua senha?',
            subtitle: 'Informe seu email e enviaremos as instruções para redefinir sua senha',
            email: 'Email',
            submit: 'Redefinir senha'
        },
        updatePassword: {
            title: 'Continuar redefinição de senha',
            subtitle: 'Informe uma nova senha e confirme',
            newpassword: 'Nova senha',
            confirmation: 'Confirmação nova senha',
            submit: 'Redefinir senha'
        },
        unsubscribe: {
            subscribedTitle: 'Confirme abaixo para não receber mais nossos e-mails. Esta ação não poderá ser desfeita.',
            unsubscribedTitle: 'Você não receberá mais nossos e-mails, obrigado!',
            unsubscribeBtn: 'Não Quero Mais Receber E-mails'
        },
        success: {
            title: 'Bom trabalho! Deu tudo certo.',
            registerInstructions: 'Para concluir o cadastro da sua conta clique no link de confirmação do email que acabamos de te enviar.',
            forgetPasswordInstructions: 'Para continuar a redefinição da sua senha clique no link de confirmação do email que acabamos de te enviar.'
        },
        error: {
            title: 'Ops, algo deu errado...',
            participantWithoutCompany: 'Tivemos um problema ao definir a empresa que o seu usuário está vinculado. Por favor, entre em contato através do telefone (19) 3305-0700 / (19) 3305-0701 para solucionar este problema.',
            companyInactive: 'Sua empresa foi inativada. Por favor, entre em contato através do telefone (19) 3305-0700 / (19) 3305-0701 para solucionar este problema.'
        },
        menu: {
            home: {
                title: 'Projetos',
                subtitle: 'Lista geral dos projetos disponíveis'
            }
        },
        confirmation: {
            yes: 'Sim',
            no: 'Não',
        },
        home: {
        },
        post: {
            views: 'visualizações',
            addComment: 'Adicione um comentario...',
            publish: 'Publicar',
            ago: 'HÁ',
        },
        suggestion: {
            suggestions: 'Sugestões para você',
            seeAll: 'Ver tudo'
        },
        addPost: {
            callButton: 'Postar',
            title: 'Nova postagem',
            addPhoto: 'Adicionar foto',
            helpMessage: 'Arraste e solte as fotos aqui para serem carregados.',
            description: 'Escreva uma legenda...',
            addButton: 'Postar',
        }
    },
    en: {
        $vuetify: en,
        general: {
            yes: 'Yes',
            no: 'No',
            caution: 'Caution',
            and: 'and'
        },
        exceptions: {
            ERRO_401: 'Your session has expired. You will be redirected to the login ... ',
            ERRO_DEFAULT: 'An error occurred while performing the operation.',
            ERRO_SEM_CONEXAO_INTERNET: 'Check your internet connection.',
            ERRO_PERDA_SESSAO: 'Sorry, you have lost the session and your page will be reloaded.',
            SUCESSO_DEFAULT: 'Operation performed successfully.',
            CANOT_CHANGE_USER_FROM_SOCIAL_NETWORK: 'Oops, your user was created from a social network, you can not change the password here.',
            CANOT_CREATE_THUMBNAL: 'Oops, unfortunately we could not create a minted image. Please enter another image. ',
            DUPLICATE_REGISTER: 'Oops, this email has already been entered before, please check the forgot password option',
            EMAIL_NOT_EXISTS: 'Oops, we\'ve noticed that this email does not exist in our account.',
            FILE_CORRUPTED: 'Oops, we were unable to recover this file',
            FILE_NOT_FOUND: 'Oops, we could not find this file in our registry',
            WRONG_PASSWORD: 'Oops, your password or email is invalid, please try again.',
            WAITING_PROCESSING: 'Oops, we have not yet been able to issue your certificate, please wait for processing to end.',
            USER_UPDATED: 'Your personal data has been successfully updated.',
            CUSTOMER_WITH_DUPLICATED_NAME: 'There is already a customer with the same name.',
            CUSTOMER_WITH_DUPLICATED_DOCUMENT: 'There is already a customer with the same document number.',
            FILE_BIGGER_THAN_ACCEPTED: 'The file must be smaller than 20Mb.'
        },
        login: {
            forgetPassword: 'Forget password?',
            login: 'Login',
            email: 'Email',
            password: 'Password',
            register: 'Register',
            inviteToRegister: 'Have not created your account yet?',
            inviteToAgreeTerms: 'By proceeding you accept our',
            termsAndPolicy: 'terms of use'
        },
        register: {
            title: 'Create your free account',
            subtitle: 'Fill in the information below',
            submit: 'Create your account',
            fullname: 'Fullname',
            email: 'Email',
            password: 'Password',
            confirmation: 'Password confirmation'
        },
        forgetPassword: {
            title: 'Forgot your password?',
            subtitle: 'Enter your email and we\'ll send you idocToSaveIsInvalidnstructions to reset your password',
            email: 'Email',
            submit: 'Redefine password'
        },
        updatePassword: {
            title: 'Password Reset Continued',
            subtitle: 'Enter a new password and confirm',
            newpassword: 'New password',
            confirmation: 'New password confirmation',
            submit: 'Redefine password'
        },
        success: {
            title: 'Good job! Everything worked.',
            registerInstructions: 'To complete your account registration click on the confirmation link of the email that we just sent you.',
            forgetPasswordInstructions: 'To continue resetting your password, click the confirmation link of the email we just sent you.'
        },
        error: {
            title: 'Ops, something went wrong...',
            participantWithoutCompany: 'We had a problem when defining the company related to your user. Please, contact us through the phone +55 (19) 3305-0700 / +55 (19) 3305-0701 in order to solve this problem.',
            companyInactive: 'Your company was inactivated. Please, contact us through the phone +55 (19) 3305-0700 / +55 (19) 3305-0701 in order to solve this problem.',
        },
        menu: {
            home: {
                title: 'Projects',
                subtitle: 'List of all available projects.'
            }
        },
        confirmation: {
            yes: 'Yes',
            no: 'No',
        },
        home: {
        }
    }
}
