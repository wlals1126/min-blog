import { ErrorContainer } from 'styles/Main';

interface ErrorProps {
	statusCode: number;
	message: string | null;
}

const Refresh = () => {
	return (
		<ErrorContainer>
			<p>기다려</p>
		</ErrorContainer>
	);
};

const Error = ({ statusCode, message = null }: ErrorProps) => {
	if (statusCode === 408) return <Refresh />;

    return (
        <ErrorContainer>
            {message ? <p>{message}</p> : <p>에러가 발생했어요</p>}
        </ErrorContainer>
    )
};

interface GIPProps {
    res: any;
    err: any;
}

Error.getInitialProp = ({ res, err }: GIPProps) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
}

export default Error;