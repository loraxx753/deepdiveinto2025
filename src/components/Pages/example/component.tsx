import { PageComponentType } from '@/lib/types'

// Define the TypeScript interfaces
export const ExamplePage: PageComponentType = () => {

    // const { exampleId } = useParams()

    return (
      <>
        <h1>Example</h1>
      </>
    );
  }

  ExamplePage.path = "/contribute/example"
